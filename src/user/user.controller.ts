import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  ReflectMetadata,
  UseInterceptors,
  Param,
  ParseIntPipe
} from '@nestjs/common'

import { CreateUserDto } from './dto/create-user.dto'
import { UserService } from './user.service'
import { TransformInterceptor } from '../common/interceptors/transform.interceptor'
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor'
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiResponse,
  ApiOperation
} from '@nestjs/swagger'

@UseInterceptors(TransformInterceptor, LoggingInterceptor)
@ApiBearerAuth()
@ApiUseTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ title: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.'
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe())
    id
  ) {
    this.userService.findAll()
  }

  @Get()
  findAll() {
    return this.userService.findAll()
  }
}
