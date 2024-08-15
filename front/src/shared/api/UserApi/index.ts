import http from '../axios';

export const GetUser = async () => http.get('auth/get');
