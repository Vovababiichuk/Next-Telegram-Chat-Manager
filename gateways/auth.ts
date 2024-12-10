'use client';

import api from './api';
import { IResponseUser, IUser, IUserData } from '../types/types';

export const register = async (
  data: IUserData,
): Promise<IResponseUser | undefined> => {
  try {
    const response = await api.post<IResponseUser>('/signup', data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const login = async (data: IUserData): Promise<IUser | undefined> => {
  try {
    const response = await api.post<IUser>('/auth/login', data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
