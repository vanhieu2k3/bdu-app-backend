import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { CustomLogger } from './logger.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly logger: CustomLogger,
  ) {}

  async findAll(): Promise<User[]> {
    this.logger.log('Fetching all users');
    return this.userModel.find().exec();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    this.logger.log('Creating a new user');
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
}
