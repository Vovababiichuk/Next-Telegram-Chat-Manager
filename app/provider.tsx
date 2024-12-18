'use client';

import * as React from 'react';
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps as NextThemesProviderProps,
} from 'next-themes';

// Extend the NextThemesProviderProps type to include all necessary props
type ThemeProviderProps = NextThemesProviderProps & {
  children: React.ReactNode;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
