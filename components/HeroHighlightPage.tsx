'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Form } from '@/components/Form';
import { HeroHighlight, Highlight } from './ui/hero-highlight.tsx';

export function HeroHighlightPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/signup') {
      setIsSignUp(true);
    } else {
      setIsSignUp(false);
    }
  }, [pathname]);

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
          {isSignUp ? (
            <>
              Create an account{' '}
              <Highlight className="text-black dark:text-white">to get started!</Highlight>
            </>
          ) : (
            <>
              Login to your account{' '}
              <Highlight className="text-black dark:text-white">to continue</Highlight>
            </>
          )}
        </motion.h1>
        <div className="flex items-center justify-center">
          <div className="max-w-[600px] w-full">
            <Form isSignUp={isSignUp} />
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
}
