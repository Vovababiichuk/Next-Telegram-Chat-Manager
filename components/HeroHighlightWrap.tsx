'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Form } from '@/components/Form';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { motion } from 'framer-motion';
import { MenuPanel } from './MenuPanel';
import { getNameFromLocalStorage } from '@/utils/localStorage';

const HeroHighlightPage = () => {
  const [content, setContent] = useState<'signup' | 'profile' | 'login'>(
    'login',
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [name, setName] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/signup') {
      setContent('signup');
    } else if (pathname === '/profile') {
      setContent('profile');
    } else {
      setContent('login');
    }
    setIsLoaded(true);

    const storedName = getNameFromLocalStorage();
    setName(storedName);
  }, [pathname]);

  if (!isLoaded) {
    return null;
  }

  return (
    <HeroHighlight containerClassName="h-screen">
      <div className="flex flex-col gap-16">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-[42px] font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          {content === 'signup' && (
            <>
              Create an account{' '}
              <Highlight className="text-black dark:text-white">
                to get started!
              </Highlight>
            </>
          )}
          {content === 'profile' && (
            <div className="text-[40px]">
              👋 Hello,{' '}
              <span className="text-blueSecond underline">{name}</span>! Welcome
              to your{' '}
              <Highlight className="text-black dark:text-white">
                Profile
              </Highlight>
            </div>
          )}
          {content === 'login' && (
            <>
              Login to your account{' '}
              <Highlight className="text-black dark:text-white">
                to continue
              </Highlight>
            </>
          )}
        </motion.h1>
        <div className="flex items-center justify-center">
          <div className="max-w-[600px] w-full">
            {content === 'signup' && <Form isSignUp={true} />}
            {content === 'profile' && <MenuPanel />}
            {content === 'login' && <Form isSignUp={false} />}
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
};

export default HeroHighlightPage;
