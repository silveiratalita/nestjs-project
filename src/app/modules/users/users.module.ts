import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './entities/users.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import { users } from './entities/user.entity';
import { DatabaseModule } from '../../../database/database.module';

@Module({
  imports: [
    SequelizeModule.forFeature([users]),
    DatabaseModule
  ],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders],
  exports: [SequelizeModule]
})

export class UsersModule {};
