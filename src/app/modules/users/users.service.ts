import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { users } from './entities/user.entity';
import { QueryData } from '../../../utils/global/globalInterface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(users) private usersRepository: typeof users) {};

  create(createUserDto: CreateUserDto){
    if (createUserDto.password !== createUserDto.passwordConfirmation) {
      throw new Error('PASSWORD_NOT_MATCH');
    }

    return this.usersRepository.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: bcrypt.hashSync(createUserDto.password, 10),
    });
  };

  findAll(filter: QueryData): Promise<users[]> {
    return this.usersRepository.scope('defaultOptions').findAll<users>({
      where: { ...filter }
    });
  };

  findOne(filter: QueryData) {
    return this.usersRepository.scope('defaultOptions').findOne<users>({
      where: { ...filter }
    });
  };

  update(updateUserDto: UpdateUserDto, filter: QueryData) {
    return this.usersRepository.update<users>(updateUserDto, {
      where: { ...filter },
    });
  };

  remove(filter: QueryData) {
    return this.usersRepository.destroy<users>({
      where: { ...filter }
    });
  };
};
