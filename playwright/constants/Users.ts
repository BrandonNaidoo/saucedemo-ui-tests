import { Role } from '../enums/Role';

export const users: Record<Role, { username: string; password: string }> = {
  [Role.standard_user]: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  [Role.locked_out_user]: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  [Role.incorrect_username_user]: {
    username: 'incorrect_username_user',
    password: 'secret_sauce',
  },
  [Role.incorrect_password_user]: {
    username: 'standard_user',
    password: 'wrong_password',
  },
};
