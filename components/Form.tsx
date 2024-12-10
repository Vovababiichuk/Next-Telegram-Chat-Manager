'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Input from './ui/form-input';
import { cn, validateForm } from '@/utils/utils';
import { Label } from './ui/form-label';
import { ClipLoader } from 'react-spinners';
import { register, login } from '../gateways/auth';
import { IUserData, IErrors } from '../types/types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store/store';
import { loginAction } from '@/redux/store/user/userSlice';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { triggerConfetti } from '@/utils/confettiEffect';
import {
  setNameToLocalStorage,
  setTokenToLocalStorage,
} from '@/utils/localStorage';

export const Form = ({ isSignUp }: { isSignUp: boolean }) => {
  const [formData, setFormData] = useState<IUserData>({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = validateForm(formData, isSignUp);

    if (!validationResult.valid) {
      setErrors({ global: validationResult.message });
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      let response;
      const { name, ...loginData } = formData;
      if (isSignUp) {
        response = await register(formData);
        if (response) {
          setNameToLocalStorage('name', response.user.name);

          router.push('/signin');
          toast.success('Registration successful! Please log in.');
        }
      } else {
        response = await login(loginData);

        if (response) {
          setTokenToLocalStorage('token', response.token);
          dispatch(loginAction(response.user));

          router.push('/profile');
          toast.success('Login successful!');

          triggerConfetti();
        }
      }
    } catch (err: any) {
      console.log('err', err);

      const serverMessage = err.response?.data?.message;

      if (serverMessage) {
        toast.error(serverMessage);
      } else {
        toast.error('An unexpected error occurred!.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black dark:shadow-glow">
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Tyler"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <div className="text-red-500 text-sm">{errors.name}</div>
              )}
            </LabelInputContainer>
          </div>
        )}

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="text-red-500 text-sm">{errors.email}</div>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="text-red-500 text-sm">{errors.password}</div>
          )}
        </LabelInputContainer>

        {errors.global && (
          <div className="text-red-500 mb-4">{errors.global}</div>
        )}

        <button
          className={cn(
            'bg-gradient-to-br relative group/btn from-black to-neutral-600 flex justify-center items-center w-full text-white rounded-md h-10 font-medium shadow-md',
            loading && 'opacity-50 cursor-not-allowed',
          )}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className="flex justify-center items-center w-full h-full">
              <ClipLoader color="#ffffff" loading={loading} size={24} />
            </div>
          ) : (
            <>
              {isSignUp ? 'Sign up' : 'Sign in'}
              &rarr;
            </>
          )}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <span className="text-white dark:text-white text-sm text-center">
            {isSignUp ? 'Already have an account?' : 'Don’t have an account?'}{' '}
            <Link
              className="text-blueSecond dark:text-blueSecond underline font-bold"
              href={isSignUp ? '/signin' : '/signup'}
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};
