import { AuthDTO } from './index.types';
import http from '../axios';

export const AuthorizationApi = async (values: AuthDTO) =>
  http.post('auth', values);

export const RefApi = async () => http.get('auth/ref');
