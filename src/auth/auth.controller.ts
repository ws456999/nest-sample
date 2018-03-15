import { Controller, Post, HttpStatus, HttpCode, Get } from '@nestjs/common'
import { AuthService } from './auth.service'
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiResponse,
  ApiOperation
} from '@nestjs/swagger'

@ApiBearerAuth()
@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  @HttpCode(HttpStatus.OK)
  public async getToken() {
    return await this.authService.createToken()
  }

  @Get('authorized')
  public async authorized() {
    return true
    console.log('Authorized route...')
  }

  @Get('test')
  public async test() {
    console.log('test')
    return {
      data: 'what'
    }
  }
}
