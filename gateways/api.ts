'use client';

import axios from 'axios';
import { getTokenFromLocalStorage } from '@/utils/localStorage';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ` + getTokenFromLocalStorage() || '',
  },
});

export default api;
