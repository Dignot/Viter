import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();
const salt = +process.env.SALT;
export function getHashPassword(password: string) {
  return bcrypt.hash(password, salt);
}
