'use client';

import api from './api';
import { IResponseUserData, IUser, IUserData } from '../types/types';

export const register = async (data: IUserData): Promise<IResponseUserData> => {
  try {
    const response = await api.post<IResponseUserData>('/signup', data);
    return response.data;
  } catch (error: any) {
    console.error('Registration failed:', error.message || error);
    throw new Error('Failed to register. Please try again.');
  }
};

export const login = async (data: IUserData): Promise<IResponseUserData> => {
  try {
    const response = await api.post<IResponseUserData>('/auth/login', data);
    return response.data;
  } catch (error: any) {
    console.error('Login failed:', error.message || error);
    throw new Error('Failed to login. Please check your credentials.');
  }
};

export const getProfile = async (): Promise<IUser> => {
  try {
    const { data } = await api.get<IUser>('/auth/profile');
    if (!data) {
      throw new Error('Profile data is missing');
    }
    return data;
  } catch (error: any) {
    console.error('Failed to fetch profile:', error.message || error);
    throw new Error('Unable to fetch profile. Please try again later.');
  }
};
