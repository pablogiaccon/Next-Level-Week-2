import IUserDTO from '../dtos/IUserDTO';

import db from '../../../database/connection';

interface IRequest {
  id: string;
  email: string;
  password: string;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

class CreateUsersService {
  public async execute({
    id,
    email,
    password,
    name,
    avatar,
    whatsapp,
    bio,
  }: IRequest): Promise<void> {
    await db('users').insert({
      id,
      email,
      password,
      name,
      avatar,
      whatsapp,
      bio,
    });
  }
}

export default CreateUsersService;
