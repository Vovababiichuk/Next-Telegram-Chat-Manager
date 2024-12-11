'use client';

import React from 'react';
import { FloatingDock } from './ui/floating-dock';

import {
  IconHome,
  IconNewSection,
  IconMessage,
  IconLayoutSidebarRightExpand,
  IconBriefcase,
  IconSquareX,
  IconSettings,
  IconPaywall,
} from '@tabler/icons-react';

export const MenuPanel = () => {
  const links = [
    {
      title: 'Home',
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '/',
    },

    {
      title: 'Chats',
      icon: (
        <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Add Telegram Account',
      icon: (
        <IconNewSection
          color="red"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: '#',
    },
    {
      title: 'Upgrade to Premium',
      icon: (
        <IconPaywall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Settings',
      icon: (
        <IconSettings className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Log out',
      icon: (
        <IconLayoutSidebarRightExpand className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Delete Account',
      icon: (
        <IconSquareX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
  ];

  return (
    <div className="flex items-center justify-center h-[10rem] w-full">
      <FloatingDock items={links} />
    </div>
  );
};
