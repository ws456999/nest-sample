import * as passport from 'passport'
import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { AuthorizeMiddleware } from '../common/middlewares/authorize.middleware'

@Module({
  components: [AuthService],
  controllers: [AuthController]
})
export class AuthModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(AuthorizeMiddleware)
      .forRoutes({ path: '/auth/test', method: RequestMethod.GET })
  }
}
