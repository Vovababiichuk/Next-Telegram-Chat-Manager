'use client';

export function getTokenFromLocalStorage(): string {
  const data = localStorage.getItem('token');
  const token: string = data ? JSON.parse(data) : '';

  return token;
}

export const setTokenToLocalStorage = (key: string, token: string): void => {
  localStorage.setItem(key, JSON.stringify(token));
};

export const setNameToLocalStorage = (key: string, name: string): void => {
  localStorage.setItem(key, name);
};

export const getNameFromLocalStorage = (): string => {
  const data = localStorage.getItem('name');
  return data || '';
};

export const removeNameFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const removeTokenFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
