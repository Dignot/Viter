import http from '../axios';
import { RegisterDTO } from './index.types';

export const RegisterApi = (value: RegisterDTO) =>
  http.post('auth/register', value);
