import { Role } from '../enums/role';

export const getUser = (role: Role): { username: string; password: string } => {
  const user = Cypress.env('users')[role];
  if (!user) throw new Error(`Missing user for role: ${role}`);
  return user;
};
