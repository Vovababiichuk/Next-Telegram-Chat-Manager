'use client';

import axios from 'axios';
import { getTokenFromLocalStorage } from '../utils/utils';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ` + getTokenFromLocalStorage() || '',
  },
});

export default api;

/*!SECTION
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api', // ваш бекенд
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;

*/

/*const fetchChats = async () => {
    const response = await api.get('/chats');
    return response.data;
}; */

/*!SECTION
Вихід із системи:

Видаляє токен:
const logout = () => {
    localStorage.removeItem('token');
    router.push('/login');
};
*/
