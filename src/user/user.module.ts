import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserController } from './user.controller'
import { UserService } from './user.service'
import { userProviders } from './user.provider'
import { UserSchema } from './schemas/user.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'user', schema: UserSchema }])],
  controllers: [UserController],
  components: [UserService]
})
export class UserModule {}
