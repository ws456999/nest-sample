import { Component, Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { User } from './interfaces/user.interface'
import { CreateUserDto } from './dto/create-user.dto'
import { UserSchema } from './schemas/user.schema'

@Component()
export class UserService {
  private readonly users: User[] = []
  constructor(
    @InjectModel(UserSchema) private readonly userModel: Model<User>
  ) {}

  // 创建用户
  async create(user: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(user)
    return await createUser.save()
  }
  // find all user
  async findAll(): Promise<User[]> {
    return await this.userModel.find()
  }
}
