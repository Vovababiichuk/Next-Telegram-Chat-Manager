import { LogIn, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MagicButton from './MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Hero = () => {
  return (
    <div className="pb-20 pt-40 h-screen">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <Image
          className="absolute top-16 z-50"
          src="/logo-chat.svg"
          alt="logo"
          width={190}
          height={190}
        />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="One Platform for All Your Telegram Messages"
            className="text-center text-[30px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-[10px] md:text-lg lg:text-2xl">
            Manage your Telegram chats and messages in one place.
          </p>

          <div className="flex gap-10 justify-center">
            <Link href="/signin">
              <MagicButton title="Sign In" icon={<LogIn />} position="right" />
            </Link>
            <Link href="/signup">
              <MagicButton title="Sign Up" icon={<User />} position="right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
