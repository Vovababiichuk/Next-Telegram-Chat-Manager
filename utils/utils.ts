'use client';

import { IUserData } from '@/types/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const VALIDATION_ERRORS = {
  REQUIRED_FIELDS: 'All fields are required',
  INVALID_EMAIL: 'Invalid email address',
  PASSWORD_LENGTH: 'Password must be at least 6 characters long',
  PASSWORD_NUMBER: 'Password must contain at least 1 number',
  NAME_LENGTH: 'Name must be at least 4 characters long',
};

export const SERVER_ERRORS = {
  400: 'Invalid request. Please check your input.',
  401: 'Invalid credentials. Please check your email and password.',
  403: 'You do not have permission to perform this action.',
  404: 'The requested resource was not found.',
  500: 'Internal server error. Please try again later.',
};

export const validateForm = (formData: IUserData, isSignUp: boolean) => {
  const { name, email, password } = formData;

  if (!email || !password || (isSignUp && !name)) {
    return { valid: false, message: VALIDATION_ERRORS.REQUIRED_FIELDS };
  }

  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return { valid: false, message: VALIDATION_ERRORS.INVALID_EMAIL };
  }

  if (password.length < 6) {
    return { valid: false, message: VALIDATION_ERRORS.PASSWORD_LENGTH };
  }

  if (!/\d/.test(password)) {
    return { valid: false, message: VALIDATION_ERRORS.PASSWORD_NUMBER };
  }

  if (isSignUp && name && name.length < 4) {
    return { valid: false, message: VALIDATION_ERRORS.NAME_LENGTH };
  }

  return { valid: true, message: null };
};
