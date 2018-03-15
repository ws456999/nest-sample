import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [UserModule, AuthModule, MongooseModule.forRoot('mongodb://localhost:27017/nest')],
  controllers: [AppController],
  components: []
})
export class ApplicationModule {}
