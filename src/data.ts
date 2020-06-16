import { User } from './entity/User';

export const userEntityList: Pick<User, 'firstName' | 'lastName' | 'age'>[] = [
  {
    firstName: 'fn1',
    lastName: 'ln1',
    age: 30,
  },
  {
    firstName: 'fn2',
    lastName: 'ln2',
    age: 31,
  },
  {
    firstName: 'fn3',
    lastName: 'ln3',
    age: 32,
  },
  {
    firstName: 'fn4',
    lastName: 'ln4',
    age: 33,
  },
  {
    firstName: 'fn5',
    lastName: 'ln5',
    age: 34,
  },
];
