import USERS from '../data/users';

export function findUser(username, password) {
  const found = USERS.find((u) => u.username === username && u.password === password);
  return found || null;
}