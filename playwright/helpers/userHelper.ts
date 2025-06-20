import { users } from '../constants/Users';
import { Role } from '../enums/Role';

export const getUser = (role: Role) => users[role];
