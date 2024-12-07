'use client';

import { BriefcaseBusiness } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroHighlightPage } from '@/components/HeroHighlightPage';
import { socialMedia } from '@/data';

export default function SignUpPage() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute top-6 left-10 z-50 flex justify-between items-center">
        <Link href="/" className="hover:scale-110 transition-all duration-300">
          <Image src="/logo-chat.svg" alt="logo" width={80} height={80} />
        </Link>
        <div className="absolute left-[1306px] flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link
                href={info.link}
                target="_blank"
                className="hover:scale-105 transition-all duration-300"
              >
                <Image src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
          <Link
            href="https://volodymyrcodepro.site/"
            target="_blank"
            className="hover:scale-110 transition-all duration-300"
          >
            <BriefcaseBusiness size={34} color="#FE9011" />
          </Link>
        </div>
      </div>
      <HeroHighlightPage />
    </div>
  );
}
