import 'reflect-metadata';
import { createConnection, getConnection } from 'typeorm';
import { User } from './entity/User';
import { userEntityList } from './data';

async function run() {
  try {
    const connection = await createConnection();
    const userRepository = connection.getRepository(User);
    await userRepository.insert(userEntityList);
  } catch (error) {
    console.error(error);
  } finally {
    getConnection().close();
  }
}

run();
